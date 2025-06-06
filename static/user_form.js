document.addEventListener("DOMContentLoaded", function() {
    const occupation = document.getElementById("occupation").value;
    toggleOccupationFields(occupation);

    // Event listener for occupation change
    document.getElementById("occupation").addEventListener("input", function() {
        const selectedOccupation = this.value;
        toggleOccupationFields(selectedOccupation);
    });

    function toggleOccupationFields(occupation) {
        // Hide all fields initially
        hideAllFields();

        // Show relevant fields based on occupation
        if (occupation === "Skilled/Manual Labour") {
            document.getElementById("skilledFields").classList.remove("hidden");
        } else if (occupation === "Agriculture") {
            document.getElementById("agricultureFields").classList.remove("hidden");
        } else if (occupation === "Government Employee") {
            document.getElementById("governmentFields").classList.remove("hidden");
        } else if (occupation === "Business") {
            document.getElementById("businessFields").classList.remove("hidden");
        } else if (occupation === "Private Sector") {
            document.getElementById("privateFields").classList.remove("hidden");
        }
    }

    function hideAllFields() {
        const allFields = document.querySelectorAll(".hidden");
        allFields.forEach(function(field) {
            field.classList.add("hidden");
        });
    }

    // Business-specific logic for small and large business types
    const businessTypeSelect = document.querySelector("[name='business_type']");
    if (businessTypeSelect) {
        businessTypeSelect.addEventListener("change", function() {
            const businessType = this.value;
            toggleBusinessDetails(businessType);
        });
    }

    function toggleBusinessDetails(businessType) {
        const smallBusinessDetails = document.getElementById("smallBusinessDetails");
        const largeBusinessDetails = document.getElementById("largeBusinessDetails");

        if (businessType === "small") {
            smallBusinessDetails.classList.remove("hidden");
            largeBusinessDetails.classList.add("hidden");
        } else if (businessType === "large") {
            largeBusinessDetails.classList.remove("hidden");
            smallBusinessDetails.classList.add("hidden");
        } else {
            smallBusinessDetails.classList.add("hidden");
            largeBusinessDetails.classList.add("hidden");
        }
    }
});

