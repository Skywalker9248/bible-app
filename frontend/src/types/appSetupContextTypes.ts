type AppSetupContextType = {
    mode: string
    isLoading: boolean
    error: string | null
    updateMode: (mode: string) => void
    updateIsLoading: (isLoading: boolean) => void
    updateError: (error: string | null) => void
}

export type { AppSetupContextType };