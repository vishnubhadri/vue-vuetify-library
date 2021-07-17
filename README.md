# Vue-Vuetify-library
Vue + Vuetify custom library. Read more at [dev.to](https://dev.to/vishnubhadri/vue-vuetify-custom-component-library-2n9h)

## Steps
1. Clone the repository.
2. Run `npm i` in application and custom-lib.
3. Build custom-lib using `npm run lib` inside custom-lib.
4. Create a link from custom-lib using `npm link`.
5. Connect the custom-lib to application using `npm link .custom-lib` and `npm i ../application`.
6. Finally, Run `npm run serve` in the application.

## Add New Components
If you want to add new components. add in `custom-lib/src/components/<YOUR_COMPONENT>.vue` and map in `custom-lib/src/components/index.js`. Later repeat step 3.

Then test that component by adding in `application/src/App.vue`.

## Troubleshoot
Feel free to raise issues if you find difficulties.