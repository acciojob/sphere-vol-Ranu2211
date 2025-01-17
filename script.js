function volume_sphere() {
    // Get the radius input element
    let radius = document.getElementById('radius').value;
    
    // Convert radius to number and calculate volume
    let volume = (4/3) * Math.PI * Math.pow(Number(radius), 3);
    
    // Round to 4 decimal places if the result is a valid number
    volume = Number.isFinite(volume) ? volume.toFixed(4) : 'NaN';
    
    // Display result in the volume field
    document.getElementById('volume').value = volume;
    
    // Prevent form submission
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;