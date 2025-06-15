<template>
  <div class="flex h-screen items-center justify-between">
    <div class="w-full md:w-1/2" v-if="isLoginWindow">
      <div class="mx-auto w-full max-w-[330px] px-5">
        <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Log in</h1>
        <p class="mt-1 text-muted-foreground">Enter your email & password to log in.</p>

        <form class="mt-10" @submit="submit">
          <fieldset :disabled="isSubmitting" class="grid gap-5">
            <div>
              <UiVeeInput label="Email" type="email" name="email" v-model="input.email" placeholder="john@example.com" />
            </div>
            <div>
              <UiVeeInput label="Password" type="password" v-model="input.rawPassword" name="password" />
            </div>
            <div>
              <UiButton class="w-full" type="submit" text="Log in" />
            </div>
            <UiDivider label="OR" />
            <UiButton variant="outline" type="button" @click="signInWithGoogle()">
              <Icon class="size-4" name="logos:google-icon" />
              <span class="ml-2">Continue with Google</span>
            </UiButton>
          </fieldset>
        </form>
        <p class="mt-8 text-sm font-semibold text-primary underline-offset-2 hover:underline cursor-pointer " @click="isLoginWindow=false">
          Forgot password?
        </p>
        <p class="mt-4 text-sm text-muted-foreground">
          Don't have an account?
          <NuxtLink  class="font-semibold text-primary underline-offset-2 hover:underline" to="/register"
          >Create account</NuxtLink
          >
        </p>
      </div>
    </div>
    <div class="w-full md:w-1/2" v-if="!isLoginWindow">

        <div class="relative flex h-screen items-center justify-center">
          <div
              class="absolute inset-0 z-[1] bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(circle,transparent_25%,theme(colors.border)_100%)]"
          />
          <div class="relative z-[2] w-full max-w-[340px] px-5">
            <div
                class="mx-auto mb-6 flex size-14 items-center justify-center rounded-lg border bg-background"
            >
              <Icon class="size-6" name="lucide:key-round" />
            </div>

            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Forgot Password</h1>
              <p class="mt-1 text-muted-foreground">No worries, we'll send you reset instructions.</p>
            </div>

            <form class="mt-10" @submit="submit">
              <fieldset :disabled="isSubmitting" class="grid gap-5">
                <UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
                <UiButton class="w-full" type="submit" text="Send instructions" />
              </fieldset>
            </form>
            <p class="mt-8 text-sm font-semibold text-primary underline-offset-2 hover:underline cursor-pointer text-center" @click="isLoginWindow=true">
              Back to Log in
            </p>
          </div>
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
import type {SignInRequest} from "~/types/auth/auth";
import {useLogin} from "~/composables/auth/useSignIn";
import {redirect} from "~/composables/auth/useRedirectToGoogle";

useSeoMeta({
  title: "Log in",
  description: "Enter your email & password to log in.",
});
const input = reactive<SignInRequest>(
    {
      email: "",
      rawPassword : ""
    }
);
const isLoginWindow =ref(true)

const LoginSchema = object({
  email: string().email().required().label("Email"),
  password: string().required().label("Password").min(8),
});

const { handleSubmit, isSubmitting } = useForm<InferType<typeof LoginSchema>>({
  validationSchema: LoginSchema,
});

const submit = handleSubmit(async () => {
  try{
    const result = await useLogin(input)
    if(!result){
      useToast().toast(
          {
            variant: "destructive",
            description: "",
          }
      )
    }
  }
  catch (error : any) {
  }

});

const signInWithGoogle = () => {
    redirect()
};
</script>
