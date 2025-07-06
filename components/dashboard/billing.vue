<script setup lang="ts">
 import {Icon} from "@iconify/vue";
 import type { ColumnDef, Table } from "@tanstack/vue-table";
 type Payment = {
   id: string;
   amount: number;
   status: "pending" | "processing" | "success" | "failed";
   email: string;
 };

 const data: Payment[] = [
   {
     id: "m5gr84i9",
     amount: 316,
     status: "success",
     email: "ken99@yahoo.com",
   },
   {
     id: "3u1reuv4",
     amount: 242,
     status: "success",
     email: "Abe45@gmail.com",
   },
   {
     id: "derv1ws0",
     amount: 837,
     status: "processing",
     email: "Monserrat44@gmail.com",
   },
   {
     id: "5kma53ae",
     amount: 874,
     status: "success",
     email: "Silas22@gmail.com",
   },
   {
     id: "bhqecj4p",
     amount: 721,
     status: "failed",
     email: "carmella@hotmail.com",
   },
   {
     id: "5kma53ae",
     amount: 874,
     status: "success",
     email: "ujmovto@tezotu.bb",
   },
   {
     id: "bhqecj4p",
     amount: 721,
     status: "failed",
     email: "gi@po.tz",
   },
 ];

 const columns: ColumnDef<Payment>[] = [
   { accessorKey: "id", header: "ID", enableHiding: true },
   { accessorKey: "amount", header: "Amount", enableHiding: true },
   {
     accessorKey: "status",
     header: "Status",
     cell: ({ row }) => {
       return h(resolveComponent("UiBadge"), { variant: "outline", class: "capitalize" }, () => [
         row.original.status,
       ]);
     },
     enableHiding: true,
   },
   { accessorKey: "email", header: "Email", enableHiding: true },
   {
     accessorKey: "actions",
     header: "",
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
 const tableRef = ref();
 const table = ref<Table<Payment> | null>(null);
 const search = ref("");
</script>

<template>
  <div class="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 my-8">
    <h1 class="text-2xl font-bold">Billing</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12">
      <div>
        <P class="mt-10 font-semibold opacity-70 text-sm">Subscription Plan</P>
        <P class="font-semibold opacity-70 text-xs mt-3">Each organization has it's own subscription plan, billing cycle, payment methods and usage quotas.</P>
      </div>
      <div class="  md:mt-7">
        <h1 class="text-2xl font-bold text-emerald-500 ">Free Plan</h1>
        <UiButton size="xs" class="text-xs opacity-70 mt-5" variant="outline">Change subscription plan</UiButton>
        <UiAlert

        title="This organization is limited by the included usage"
        description="Projects may become unresponsive when this organization exceeds its included usage quota. To scale seamlessly, upgrade to a paid plan."
        icon="lucide:triangle-alert"
        class="text-xs mt-5 opacity-75"
        >
        </UiAlert>
      </div>
    </div>
    <UiDivider class="mt-10"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12">
      <div>
        <P class="mt-10 font-semibold opacity-70 text-sm">Payment Methods</P>
        <P class="font-semibold opacity-70 text-xs mt-3">Payments for your subscription are made using the default card.</P>
      </div>
      <UiCard class="md:mt-9">
        <UiCardHeader >
          <div class="flex gap-x-3 opacity-70" >
            <Icon icon="lucide-lab:card-credit" width="18" height="18" />
            <p class="text-sm">No payment method</p>
          </div>
        </UiCardHeader>
        <UiDivider/>
        <UiCardContent>
          <div class="w-full">
            <UiButton size="xxs" class="ml-auto text-xs" variant="outline"> Add new card</UiButton>
          </div>

        </UiCardContent>
      </UiCard>
    </div>
    <UiDivider class="mt-10"/>

      <div>
        <P class="mt-10 font-semibold opacity-70 text-sm">Past Invoices</P>
        <P class="font-semibold opacity-70 text-xs mt-3">You get an invoice every time you change your plan or when your monthly billing cycle resets.</P>
      </div>
      <UiTanStackTable

        ref="tableRef"
        show-select
        :search="search"
        :data="data"
        :columns="columns"
        class="mt-5 rounded-md border"
        :page-size="2"
        @ready="table = $event"
      >
        <template #empty>
          <div class="flex w-full flex-col items-center justify-center gap-5 py-5">

            <span class="mt-2">No data available.</span>
          </div>
        </template>
      </UiTanStackTable>

  </div>
</template>

