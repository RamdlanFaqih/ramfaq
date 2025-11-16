'use client'

import React from 'react'
import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Moon, Sun } from 'lucide-react'

const ToggleTheme = () => {
    const { setTheme } = useTheme()

    const handleLightMode = () => {
        setTheme('light')
    }

    const handleDarkMode = () => {
        setTheme('dark')
    }

    const handleSystemMode = () => {
        setTheme('system')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    size="icon" 
                    variant="outline"
                    className="border-border hover:bg-accent hover:text-accent-foreground"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-foreground" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-foreground" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className="bg-popover text-popover-foreground">
                <DropdownMenuItem 
                    onClick={handleLightMode}
                    className="focus:bg-accent focus:text-accent-foreground cursor-pointer"
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem 
                    onClick={handleDarkMode}
                    className="focus:bg-accent focus:text-accent-foreground cursor-pointer"
                >
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem 
                    onClick={handleSystemMode}
                    className="focus:bg-accent focus:text-accent-foreground cursor-pointer"
                >
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ToggleTheme