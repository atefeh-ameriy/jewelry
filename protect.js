// Prevent default right-click menu behavior
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Disable F12 key and Ctrl+Shift+I combo
document.addEventListener('keydown', function (event) {
  // Check for F12 key and Ctrl+Shift+I
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
    event.preventDefault();
  }

  function testKeyCode(e) {
    var keycode;
    if (e) {
        keycode = e.keyCode || e.which; // استفاده از e به عنوان ورودی
    } else {
        keycode = window.event.keyCode; // برای مرورگرهای قدیمی
    }

    // بررسی کلیدهای Ctrl + C, Ctrl + V, Ctrl + U, Ctrl + Shift + U
    if (e.ctrlKey && (keycode === 67 || keycode === 86 || keycode === 85 || keycode === 117)) {
        alert('Something Went Wrong');
        return false; // جلوگیری از عمل پیش‌فرض
    } else {
        return true; // اجازه انجام عمل پیش‌فرض
    }
}

document.onkeydown = testKeyCode;
});