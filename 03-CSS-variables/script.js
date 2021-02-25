// capture the inputs in a nodelist
const inputs = document.querySelectorAll('.controls input');

// function to update the variables
function varUpdate() {
    // to add px to the end of spacing and blur values and add nothing for color 
    const suffix = this.dataset.sizing || "";
    
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

// it listens to the change event and triggers varUpdate function
// along with change in value, also want to listen to  input-bar is dragged.
inputs.forEach(inputs => inputs.addEventListener('change',varUpdate));
inputs.forEach(inputs => inputs.addEventListener('mousemove',varUpdate));
