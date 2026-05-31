// ==================== CLOTHING MENU - MODERN UI SCRIPT ====================
// Coast Side Dev - aboahmad
// Discord: https://discord.gg/ewy2JmekUw
// ===========================================================================

// Global Variables
const clothingMenu = document.getElementById('clothingMenu');
const closeButton = document.getElementById('closeButton');
const iconBoxes = document.querySelectorAll('.icon-box');

// ==================== NUI MESSAGE HANDLER ====================
window.addEventListener('message', function(event) {
    const data = event.data;

    switch(data.action) {
        case 'open':
            openMenu();
            break;
        
        case 'close':
            closeMenu();
            break;
        
        case 'update':
            setActiveItem(data.cloth);
            break;
        
        case 'update2':
            removeActiveItem(data.cloth);
            break;
        
        case 'getallresets':
            resetItem(data.cloth);
            break;
    }
});

// ==================== MENU FUNCTIONS ====================

function openMenu() {
    clothingMenu.classList.add('active');
}

function closeMenu() {
    clothingMenu.classList.remove('active');
}

function setActiveItem(itemName) {
    const iconBox = document.querySelector(`[data-item="${itemName}"]`);
    if (iconBox) {
        iconBox.classList.add('active');
    }
}

function removeActiveItem(itemName) {
    const iconBox = document.querySelector(`[data-item="${itemName}"]`);
    if (iconBox) {
        iconBox.classList.remove('active');
    }
}

function resetItem(itemName) {
    const iconBox = document.querySelector(`[data-item="${itemName}"]`);
    if (iconBox) {
        iconBox.classList.remove('active');
    }
}

// ==================== EVENT LISTENERS ====================

// Close Button Click
closeButton.addEventListener('click', function() {
    $.post('https://dpclothingui/close');
});

// Icon Box Clicks
iconBoxes.forEach(function(iconBox) {
    iconBox.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        
        // Send command to Lua
        fetch(`https://${GetParentResourceName()}/changecloth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemName)
        });
    });
});

// ESC Key to Close
document.onkeyup = function (event) {
    const charCode = event.key;
    if (charCode == "Escape") {
        $.post('https://dpclothingui/close');
    }
};

// ==================== UTILITY FUNCTIONS ====================

const GetParentResourceName = (function() {
    const nativeFunction = window.GetParentResourceName;
    return function() {
        if (nativeFunction) {
            return nativeFunction();
        }
        return 'dpclothingui';
    };
})();