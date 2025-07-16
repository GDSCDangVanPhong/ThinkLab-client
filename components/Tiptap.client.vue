<template>
  <h1 class="font-bold text-2xl mb-7">Mono Render</h1>
  <div v-if="editor">
    <div class="flex gap-x-10">
      <div class="w-9/12" >
        <div
          class="flex items-center gap-1 border-b-0 rounded-tl-md rounded-tr-md border border-input bg-transparent p-1 w-full justify-center"
        >
          <UiButton variant="ghost">
              <Icon icon="material-symbols:undo-rounded" width="20" height="20" />
          </UiButton>
          <UiButton variant="ghost">
              <Icon icon="material-symbols:redo-rounded" width="20" height="20" />
          </UiButton>
          <div class=" h-7 ">
              <UiDivider orientation="vertical" />
          </div>
          <div class="w-14 ml-1.5">
            <UiSelect 
              v-model="heading"
            >
              <UiSelectTrigger placeholder="H1" :trailing-icon="false" class="justify-center border-none hover:bg-secondary" />
              <UiSelectContent class >
              <UiSelectGroup>
                <UiSelectItem value="H1">H1</UiSelectItem>
                <UiSelectItem value="H2">H2</UiSelectItem>
                <UiSelectItem value="H3">H3</UiSelectItem>
              </UiSelectGroup>
            </UiSelectContent>
            </UiSelect>
            
          </div>
        </div>
        <EditorContent :editor="editor" class="max-w-5/6" />  
      </div>
      <div class="flex-1">
        <UiCard class="lg:min-h-[786px] w-full ">
          <UiCardHeader>
            <UiCardTitle>
              Chat With AI
            </UiCardTitle>
            <UiCardDescription>
              Helping you with just one prompt
            </UiCardDescription>
          
          </UiCardHeader>
        </UiCard>
        
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
  import { Color } from "@tiptap/extension-color";
  import Highlight from "@tiptap/extension-highlight";
  import Link from "@tiptap/extension-link";
  import ListItem from "@tiptap/extension-list-item";
  import SubScript from "@tiptap/extension-subscript";
  import Heading from "@tiptap/extension-heading";
  import Superscript from "@tiptap/extension-superscript";
  import {Table} from "@tiptap/extension-table";
  import TableCell from "@tiptap/extension-table-cell";
  import TableHeader from "@tiptap/extension-table-header";
  import TableRow from "@tiptap/extension-table-row";
  import Image from "@tiptap/extension-image";
  import {TextStyle} from "@tiptap/extension-text-style";
  import Typography from "@tiptap/extension-typography";
  import StarterKit from "@tiptap/starter-kit";
  import { EditorContent, useEditor } from "@tiptap/vue-3";
  import { Icon } from "@iconify/vue";
  const model = defineModel<any>({ default: "" });

  const props = withDefaults(
    defineProps<{
      modelType?: "html" | "json";
      class?: any;
    }>(),
    {
      modelType: "html",
    }
  );


  const editor = useEditor({
    content: model.value,
    editorProps: {
      attributes: {
        class:
          tw`max-h-none w-full min-h-[740px]  lg:max-w-5/6 overflow-auto break-words rounded-md rounded-tr-none rounded-tl-none border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50` as any,
      },
    },
    onUpdate(val) {
      if (props.modelType === "html") {
        model.value = val.editor.getHTML();
      } else if (props.modelType === "json") {
        model.value = JSON.stringify(val.editor.getJSON());
      }
    },
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({}),
      Table.configure({
        resizable: true,
      }),
      Image.configure({
        inline : true,
        allowBase64: true,
      }),
      Heading.configure({
        levels:[1,2,3],
      }),
      Superscript,
      SubScript,
    
      Typography,
      Highlight,
      TableRow,
      TableHeader,
      StarterKit,
      TableCell,
    ],
  });
  const heading =ref('')
  const changingHeading = watch(heading , ()=>{
    
    
    if(heading.value == 'H1'){
      editor.value?.chain().focus().setHeading({level:1}).run()
      console.log('Trigg1')
    }
    else if(heading.value =='H2'){
      editor.value?.chain().focus().setHeading({level:2}).run()
            console.log('Trigg2')

    }
    else{
      editor.value?.chain().focus().setHeading({level :3}).run()
            console.log('Trigg3')

    }

  })

</script>
<
