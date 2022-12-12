    constant: vis_id {
        value: "pp_custom_single_value"
        export: override_optional
    }
    constant: vis_label {
        value: "Single Value (Custom)"
        export: override_optional
    }
    visualization: {
        id: "@{vis_id}"
        label: "@{vis_label}"
        file: "single_value_with_comparison.js"
    }