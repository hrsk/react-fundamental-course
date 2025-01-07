import {useState} from "react";

export const useFetching = (callback: () => void) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetching = async () => {
        try {
            setIsLoading(true)
            callback()
        } catch (e: any) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]

}