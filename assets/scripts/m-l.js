function openMenuLog() {
    let menuLog = document.querySelector('.menu-log');
    if (menuLog.classList.contains('open-menu-log', 'border-menu-log', 'width-btn-log')) {
        menuLog.classList.remove('open-menu-log', 'border-menu-log', 'width-btn-log');
    } else {
        menuLog.classList.add('open-menu-log', 'border-menu-log', 'width-btn-log'); 
    }
}