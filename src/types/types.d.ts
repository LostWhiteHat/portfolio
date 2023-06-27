import { Component } from "react"

type Button = {
    link: string
    icon: Components
    text: string
    target?: '_blank'
    key?: number
    toggle?: any
}

type Skillset = {
    icon: Components
    key?: number
}

type Project = {
    language?: string
    title: string
    description: string
    link: string
    key?: number
}