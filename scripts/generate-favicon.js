import sharp from 'sharp';

const INPUT = './Gemini_Generated_Image_o3wfh7o3wfh7o3wf.png';
const OUTPUT_ICO = './public/favicon.ico';
const OUTPUT_PNG_192 = './public/icon-192.png';
const OUTPUT_PNG_512 = './public/icon-512.png';
const OUTPUT_APPLE = './public/apple-touch-icon.png';

async function generateFavicon() {
    console.log('🎯 Создаю favicon из твоей фотки...');

    // Получаем метаданные изображения
    const meta = await sharp(INPUT).metadata();
    const size = Math.min(meta.width, meta.height);

    // Берём верхнюю часть (лицо) и обрезаем в квадрат
    const squareCrop = sharp(INPUT)
        .extract({
            left: Math.floor((meta.width - size) / 2),
            top: 0,  // берём сверху, где лицо
            width: size,
            height: size
        });

    // Создаём круглую маску
    function circleМask(s) {
        return Buffer.from(
            `<svg width="${s}" height="${s}">
                <circle cx="${s / 2}" cy="${s / 2}" r="${s / 2}" fill="white"/>
            </svg>`
        );
    }

    // 32x32 для favicon.ico (PNG формат, браузеры поддерживают)
    const buf32 = await squareCrop.clone().resize(32, 32).png().toBuffer();
    const mask32 = circleМask(32);
    await sharp(buf32)
        .composite([{ input: mask32, blend: 'dest-in' }])
        .png()
        .toFile(OUTPUT_ICO.replace('.ico', '.png'));
    console.log('✅ favicon.png (32x32) — готово');

    // 192x192 для PWA
    const buf192 = await squareCrop.clone().resize(192, 192).png().toBuffer();
    const mask192 = circleМask(192);
    await sharp(buf192)
        .composite([{ input: mask192, blend: 'dest-in' }])
        .png()
        .toFile(OUTPUT_PNG_192);
    console.log('✅ icon-192.png — готово');

    // 512x512 для PWA
    const buf512 = await squareCrop.clone().resize(512, 512).png().toBuffer();
    const mask512 = circleМask(512);
    await sharp(buf512)
        .composite([{ input: mask512, blend: 'dest-in' }])
        .png()
        .toFile(OUTPUT_PNG_512);
    console.log('✅ icon-512.png — готово');

    // Apple Touch Icon 180x180
    const buf180 = await squareCrop.clone().resize(180, 180).png().toBuffer();
    const mask180 = circleМask(180);
    await sharp(buf180)
        .composite([{ input: mask180, blend: 'dest-in' }])
        .png()
        .toFile(OUTPUT_APPLE);
    console.log('✅ apple-touch-icon.png — готово');

    console.log('\n🎉 Все иконки созданы в папке public/');
}

generateFavicon();
