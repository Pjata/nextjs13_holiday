import { InstUISettingsProvider } from "@instructure/emotion";
import { generateInstanceCounterMap } from "@instructure/ui-react-utils";
import { canvas } from "@instructure/ui-themes";

if (!global.Element) {
  global.Element = function () {};
}

const themeOverrides = {};

function MyApp({ Component, pageProps }) {
  console.log(canvas)
  return (
    <InstUISettingsProvider
      instanceCounterMap={generateInstanceCounterMap()}
      theme={canvas}
    >
      <InstUISettingsProvider
        theme={{
          key: 'Catalog',
            colors: {
              
             backgroundSuccess: 'red',
             brand: 'orange',
             backgroundBrand: 'orange',
             backgroundBrandSecondary: 'red',
             backgroundLightest: 'orange',
             },
        }}
      >
        <Component {...pageProps} />
      </InstUISettingsProvider>
    </InstUISettingsProvider>
  );
}

export default MyApp;
