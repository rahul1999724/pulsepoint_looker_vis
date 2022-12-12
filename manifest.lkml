    constant: vis_id {
        value: "PP_custom"
        export: override_optional
    }
    constant: vis_label {
        value: "PP Custom Label"
        export: override_optional
    }
    visualization: {
        id: "@{vis_id}"
        label: "@{vis_label}"
        file: "single_value_with_comparison.js"
    }