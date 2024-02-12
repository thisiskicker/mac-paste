//this is a node.js script that will paste the contents of the clipboard as keystrokes using nut.js
//this is useful for pasting into applications that don't support pasting from the clipboard

const nut = require('@nut-tree/nut-js');

async function paste() {
    await new Promise(resolve => setTimeout(resolve, 4000)); // sleep for 4 seconds
    const text = await nut.clipboard.getContent();
    await nut.keyboard.type(text);
}

paste().then(() => {
    console.log('Pasting completed');
});
