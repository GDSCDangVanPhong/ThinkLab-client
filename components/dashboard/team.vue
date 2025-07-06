<script setup lang="ts">
  const loading = ref(false);
  import type { ColumnDef, Table } from "@tanstack/vue-table";

  const tableRef = ref();
  const table = ref<Table<Payment> | null>(null);
  const search = ref("");

  type Payment = {

    role: string
    email: string;
  };

  const data: Payment[] = [
    {
      role:"Owner",
      email: "ken99@yahoo.com",
    },
    {

      role:"Contributer",
      email: "Abe45@gmail.com",
    },
    {
      role:"Administrator",
      email: "Monserrat44@gmail.com",
    },

  ];

  const columns: ColumnDef<Payment>[] = [


    {accessorKey: "role" , header:"Role"},
    { accessorKey: "email", header: "User" },
    {
      accessorKey: "actions",
      header: "Actions",
      enableSorting: false,
      enableHiding: false,
      cell: () => {
        return h(
          resolveComponent("UiButton"),
          { variant: "ghost", size: "icon", class: "w-9 h-9" },
          () => [h(resolveComponent("Icon"), { name: "lucide:more-horizontal", class: "h-4 w-4" })]
        );
      },
    },
  ];
</script>

<template>
  <div>
    <div class="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 my-8">
    <h1 class="text-2xl font-bold">Team</h1>
    <div class="mt-8 flex items-center ">
      <UiVeeInput
      class="text-xs p-1 opacity-75 w-56 "
      type="search"
      :icon="!loading ? 'lucide:search' : 'svg-spinners:6-dots-rotate'"
      placeholder="Filter members"
      >
      </UiVeeInput>
      <UiButton
        size="xxs"
        class="text-xs bg-emerald-500 hover:bg-emerald-700">
        Invite member
      </UiButton>
    </div>
    <UiTanStackTable
      ref="tableRef"
      show-select
      :search="search"
      :data="data"
      :columns="columns"
      class="mt-5 rounded-md border"
      @ready="table = $event"
    >
      <template #empty>
        <div class="flex w-full flex-col items-center justify-center gap-5 py-5">
          <Icon name="lucide:database" class="h-12 w-12 text-muted-foreground" />
          <span class="mt-2">No data available.</span>
        </div>
      </template>
    </UiTanStackTable>
      </div>
  </div>
</template>

