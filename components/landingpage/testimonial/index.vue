<script setup lang="ts">

const testimonials = [
  {
    img: `https://randomuser.me/api/portraits/men/20.jpg`,
    quote:
        "ThinkLab has transformed how I conduct collaborative research. Real-time feedback and AI assistance? Game-changer.",
    name: "Dr. Alan Murray",
    role: "Neuroscientist, Global Brain Research Institute",
  },
  {
    img: `https://randomuser.me/api/portraits/women/18.jpg`,
    quote:
        "Finally, a platform that actually understands academic workflows. ThinkLab cuts my prep time in half.",
    name: "Prof. Olivia Chen",
    role: "Lecturer in Computational Linguistics",
  },
  {
    img: `https://randomuser.me/api/portraits/men/50.jpg`,
    quote:
        "From literature reviews to publishing drafts, ThinkLab streamlines everything. My team won’t use anything else now.",
    name: "James O’Donnell",
    role: "PhD Candidate, Climate Change Policy",
  },
  {
    img: `https://randomuser.me/api/portraits/women/70.jpg`,
    quote:
        "The collaborative editing and AI-powered suggestions are incredibly intuitive. ThinkLab feels like the future of research.",
    name: "Sofia Martinez",
    role: "Senior Researcher, AI Ethics Lab",
  },
];

</script>

<template>
  <div class="relative h-[500px] w-full overflow-hidden  border-t ">
    <div class="mt-10 flex justify-center px-12">
      <InspriraTestimonialSlider :testimonials="testimonials" class=""/>
    </div>
  </div>
</template>
