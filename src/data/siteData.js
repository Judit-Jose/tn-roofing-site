import logoImg from '../assets/images/logo.jpeg';
import ownerImg from '../assets/images/owner.jpeg';
import heroImg from '../assets/images/first.png';

export const siteData = {
  company: {
    name: "True North Roofing and Restoration",
    phone: "+1 (423) 813-9237",
    email: "info@tnroofingandrestoration.com",
    address: "Nashville, TN",
    motto: "YOUR PROPERTY IS OUR PRIORITY",
    ownerName: "Glenn Ennis"
  },
  images: {
    heroBg: heroImg,
    aboutMain: "/local_assets/images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https_/assets.cdn.filesafe.space/4B7bVvRM7AQSRKp1jihi/media/6754ed77b779b2400f876216.jpeg",
    services: {
      roofing: "/local_assets/images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https_/assets.cdn.filesafe.space/4B7bVvRM7AQSRKp1jihi/media/67549e92846fe55372cda508.png",
      gutters: "/local_assets/images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https_/assets.cdn.filesafe.space/4B7bVvRM7AQSRKp1jihi/media/67549e74846fe52736cda4f9.png",
      siding: "/local_assets/images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https_/assets.cdn.filesafe.space/4B7bVvRM7AQSRKp1jihi/media/6754855f53bb9533ffa69b01.png",
      windows: "/local_assets/images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https_/assets.cdn.filesafe.space/4B7bVvRM7AQSRKp1jihi/media/675486986d90b4561eb34bb0.png",
    },
    logoPlaceholder: logoImg,
    owner: ownerImg,
    contactBg: "/local_assets/images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https_/assets.cdn.filesafe.space/4B7bVvRM7AQSRKp1jihi/media/6754eaf8988a5f8fdc9f9199.png"
  },
  navigation: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Siding & Windows", path: "/siding-and-windows" },
    { name: "Roofing & Gutters", path: "/roofing-and-gutters" },
    { name: "Contact Us", path: "/contact" }
  ],
  services: [
    {
      title: "Roofing",
      description: "Expert roof installation, repair, and replacement for residential and commercial properties.",
      icon: "roof",
      link: "/roofing-and-gutters",
      imgKey: "roofing"
    },
    {
      title: "Gutters",
      description: "High-quality seamless gutters and gutter guard installation.",
      icon: "gutter",
      link: "/roofing-and-gutters",
      imgKey: "gutters"
    },
    {
      title: "Siding",
      description: "Premium siding options to enhance your home's curb appeal and protection.",
      icon: "siding",
      link: "/siding-and-windows",
      imgKey: "siding"
    },
    {
      title: "Windows",
      description: "Energy-efficient window replacement and installation services.",
      icon: "window",
      link: "/siding-and-windows",
      imgKey: "windows"
    }
  ],
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  }
};
