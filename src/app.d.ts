/// <reference types="@sveltejs/kit" />

type Post = {
	name: string
	meta: {
		title: string
		author: string
		date_created: Date
		date_modified?: Date
	}
}
