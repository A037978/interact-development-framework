import h1h3 from './components/button-counter.vue'
import buttonCounter from './components/h1h3-component.vue'
import { JQueryOutput, VoidOutput } from "../../../../../framework/base-app";
import Vue from "vue";

export const loaded: VoidOutput = ({ ctx, page }) => {
    console.log('Common App, Flow1/Page2 loaded event')

    // manipulate DOM as needed
    $(".jaa-content-panel").append(`<div id="my-el"></div>`)

    // declare vue instances such that they will be managed by IDF - do NOT call: new Vue()
    new Vue({
        el: '#my-el',
        components: {
            buttonCounter,
            h1h3
        },
        template: `
            <div>
                <button-counter></button-counter>
                <h1h3></h1h3>
            </div>
            `
    })
}

export const pageRenderer: JQueryOutput = ({ ctx, page }) => {
    console.log('Common App, Flow1/Page2 pageRenderer event')
    return page;
}