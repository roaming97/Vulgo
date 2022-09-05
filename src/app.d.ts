/// <reference types="@sveltejs/kit" />

type Post = {
	title: string
	author: string
	date_created: Date
	date_modified?: Date
}
