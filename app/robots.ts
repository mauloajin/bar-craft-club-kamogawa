import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots():MetadataRoute.Robots{return{rules:{userAgent:"*",allow:"/"},sitemap:"https://bar-craft-club-kamogawa.vercel.app/sitemap.xml",host:"https://bar-craft-club-kamogawa.vercel.app"}}
