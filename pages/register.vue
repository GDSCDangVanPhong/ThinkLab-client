<template>
  <div class="flex h-screen items-center justify-center">
    <div class="w-full md:w-1/2">
      <div class="mx-auto w-full max-w-[330px] px-5">
        <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">{{ title }}</h1>
        <p class="mt-1 text-muted-foreground">{{ description }}</p>

        <form class="mt-7" @submit="submit" >
          <fieldset :disabled="isSubmitting" class="grid gap-5">
            <UiVeeInput  label="Name" name="name" placeholder="John Doe" />
            <UiVeeInput

                label="Email"
                type="email"
                name="email"
                placeholder="john@example.com"
            />
            <div class="flex flex-col">
              <UiVeeInput
                  v-model="password"
                  label="Password"
                  class="peer pe-9"
                  placeholder="Password"
                  :type="isVisible ? 'text' : 'password'"
                  :aria-invalid="strengthScore < requirements.length"
              >
                <template #trailingIcon>
                  <UiTooltip disable-closing-trigger>
                    <UiTooltipTrigger as-child>
                      <button
                          type="button"
                          aria-label="Subscribe"
                          class="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          @click="toggleVisibility"
                      >
                        <Icon :name="isVisible ? 'lucide:eye-off' : 'lucide:eye'" class="size-4" />
                      </button>
                    </UiTooltipTrigger>
                    <UiTooltipContent align="center">
                      {{ isVisible ? "Hide" : "Show" }} password
                    </UiTooltipContent>
                  </UiTooltip>
                </template>
              </UiVeeInput>

              <div
                  class="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
                  role="progressbar"
                  :aria-valuenow="strengthScore"
                  :aria-valuemin="0"
                  :aria-valuemax="requirements.length"
                  aria-label="Password strength"
              >
                <div
                    :class="[`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`]"
                    :style="{ width: `${(strengthScore / requirements.length) * 100}%` }"
                />
              </div>



              <ul class="space-y-1.5" aria-label="Password requirements">
                <li v-for="(req, index) in strength" :key="index" class="flex items-center gap-2">
                  <Icon
                      v-if="req.met"
                      name="lucide:check"
                      size="16"
                      class="text-emerald-500"
                      aria-hidden="true"
                  />
                  <Icon
                      v-else
                      name="lucide:x"
                      size="16"
                      class="text-muted-foreground/80"
                      aria-hidden="true"
                  />
                  <span :class="[`text-xs ${req.met ? 'text-emerald-600' : 'text-muted-foreground'}`]">
          {{ req.text }}
          <span class="sr-only">
            {{ req.met ? " - Requirement met" : " - Requirement not met" }}
          </span>
        </span>
                </li>
              </ul>
            </div>
            <UiButton class="w-full" type="submit" text="Get Started" />
            <UiDivider label="OR" />
            <UiButton variant="outline" type="button" @click="signInWithGoogle()">
              <Icon class="size-4" name="logos:google-icon" />
              <span class="ml-2">Sign up with Google</span>
            </UiButton>
          </fieldset>
        </form>
        <p class="mt-8 text-sm text-muted-foreground">
          Already have an account?
          <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/login"
          >Log in</NuxtLink
          >
        </p>
      </div>
    </div>
    <div class="hidden h-screen md:block md:w-1/2 lg:w-1/2">

      <img
          src="../assets/image/download%20(2).jpg"
          alt="Login form image"
          class="size-full object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { object, string } from "yup";
import type { InferType } from "yup";

const title = "ThinkLab";
const description = "Create an account to get started.";

useSeoMeta({ title, description });

const Schema = object({
  name: string().required().label("Name").min(3).max(50),
  email: string().email().required().label("Email"),
  password: string().required().label("Password").min(8),
});

const { handleSubmit, isSubmitting } = useForm<InferType<typeof Schema>>({
  validationSchema: Schema,
});

const password = ref("");
const isVisible = ref(false);
const toggleVisibility = () => (isVisible.value = !isVisible.value);

const requirements = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[^A-Za-z0-9]/, text: "At least 1 special character" },
  { regex: /[0-9]/, text: "At least 1 number" },

];
const checkStrength = (pass: string) => {
  return requirements.map((req) => ({
    met: req.regex.test(pass),
    text: req.text,
  }));
};

const strength = computed(() => checkStrength(password.value));
const strengthScore = computed(() => strength.value.filter((req) => req.met).length);

const getStrengthColor = (score: number) => {
  if (score === 0) return "bg-border";
  if (score <= 1) return "bg-red-500";
  if (score <= 2) return "bg-orange-500";

  return "bg-emerald-500";
};
const submit = handleSubmit( async () =>{

    }

)



</script>
