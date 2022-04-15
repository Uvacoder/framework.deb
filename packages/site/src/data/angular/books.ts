import { Book } from "@framework/system/src/models/book"

export const bookTags = [] as const

export const books: Book<typeof bookTags[number]>[] = [
	{
		title: "Angular Projects - Second Edition",
		authors: ["Aristeidis Bampakos"],
		image: "https://static.packt-cdn.com/products/9781800205260/cover/smaller",
		description:
			"This updated second edition of Angular Projects will teach you how to build efficient and optimized web applications using Angular.",
		yearOfPublication: 2021,
		numberOfPages: 344,
		level: "beginner",
		href: "https://www.packtpub.com/product/angular-projects-second-edition/9781800205260",
		tags: [],
	},
]
