const fs = require('fs');

const extractImagesAndText = (filePath) => {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const imgRegex = /<img[^>]*src=["']([^"']*)["'][^>]*>/gi;
        const bgImgRegex = /background-image:\s*url\(["']?([^"'\)]*)["']?\)/gi;

        let images = new Set();
        let match;

        while ((match = imgRegex.exec(content)) !== null) {
            images.add(match[1]);
        }

        while ((match = bgImgRegex.exec(content)) !== null) {
            images.add(match[1]);
        }

        console.log(`\n--- Images found in ${filePath} ---`);
        [...images].forEach(img => console.log(img));
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e.message);
    }
};

extractImagesAndText('_legacy/index.html');
extractImagesAndText('_legacy/aboutus/index.html');
extractImagesAndText('_legacy/roofing-and-gutters/index.html');
extractImagesAndText('_legacy/siding-and-windows/index.html');
extractImagesAndText('_legacy/contact-us/index.html');
