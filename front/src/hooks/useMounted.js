import {useEffect, useState} from "react";

export default function useMounted(callback) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (mounted) return
        setMounted(true)
        callback()
    })
}