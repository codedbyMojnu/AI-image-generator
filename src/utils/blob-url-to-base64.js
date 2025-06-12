// convert blob url to base64 image

export default async function blobUrlToBase64(blobUrl) {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return await blobToBase64(blob);
}

function blobToBase64(blob) {
    // ১. আমরা নিজে একটি Promise তৈরি করছি
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        // ২. যখন 'onloadend' ইভেন্টটি ঘটবে, আমরা Promise-টিকে resolve() করব
        reader.onloadend = () => resolve(reader.result);

        // ৩. যখন 'onerror' ইভেন্টটি ঘটবে, আমরা Promise-টিকে reject() করব
        reader.onerror = reject;

        // ৪. আমরা অ্যাসিঙ্ক্রোনাস কাজটি শুরু করছি
        reader.readAsDataURL(blob);
    });
}

