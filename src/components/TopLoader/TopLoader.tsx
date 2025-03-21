"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// NProgress sozlamalari
NProgress.configure({ showSpinner: false, speed: 400 });

const TopLoader = () => {
    const pathname = usePathname(); // Sahifa o‘zgarganini kuzatamiz
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            NProgress.start();
        } else {
            NProgress.done();
        }
    }, [loading]);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500); // Animatsiya vaqtini sozlash

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
};

export default TopLoader;
