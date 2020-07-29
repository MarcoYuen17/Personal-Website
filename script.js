function copyToClipboard() {
    const textToCopy = document.getElementById('email').innerHTML;
    navigator.clipboard.writeText(textToCopy);
    
    alert('\nMy email has been copied to your clipboard.\nI look forward to speaking with you soon!\n\n- Marco');
}