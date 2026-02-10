import { useEffect } from "react";

interface SEOProps {
    title: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
}

export function useSEO({ title, description, ogTitle, ogDescription, ogImage }: SEOProps) {
    useEffect(() => {
        document.title = title;

        if (description) {
            let meta = document.querySelector('meta[name="description"]');
            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("name", "description");
                document.head.appendChild(meta);
            }
            meta.setAttribute("content", description);
        }

        if (ogTitle) {
            let ogTitleMeta = document.querySelector('meta[property="og:title"]');
            if (!ogTitleMeta) {
                ogTitleMeta = document.createElement("meta");
                ogTitleMeta.setAttribute("property", "og:title");
                document.head.appendChild(ogTitleMeta);
            }
            ogTitleMeta.setAttribute("content", ogTitle);
        }

        if (ogDescription) {
            let ogDescMeta = document.querySelector('meta[property="og:description"]');
            if (!ogDescMeta) {
                ogDescMeta = document.createElement("meta");
                ogDescMeta.setAttribute("property", "og:description");
                document.head.appendChild(ogDescMeta);
            }
            ogDescMeta.setAttribute("content", ogDescription);
        }

        if (ogImage) {
            let ogImageMeta = document.querySelector('meta[property="og:image"]');
            if (!ogImageMeta) {
                ogImageMeta = document.createElement("meta");
                ogImageMeta.setAttribute("property", "og:image");
                document.head.appendChild(ogImageMeta);
            }
            ogImageMeta.setAttribute("content", ogImage);
        }
    }, [title, description, ogTitle, ogDescription, ogImage]);
}
