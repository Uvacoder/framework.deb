import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
    {
        name: "Forum Vuejs",
        description: "The best place to ask questions and get answers about Vue and its ecosystem.",
        image: "https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
        type: "forum",
        href: "https://forum.vuejs.org/",
        tags: []
      }
]
