import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(product) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Deatils" {...a11yProps(0)} />
          <Tab label="Shipping" {...a11yProps(1)} />
          <Tab label="Policies" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <span>{product&&product.product.shortname}</span>
        
        <p>{product&&product.product.shortdescription}</p>

        <span>Details:</span>
        <p>{product&&product.product.shortdetail}</p>

        <span>Product Specific Color</span>
        <p>{product&&product.product.shortcolor}</p>

        <span>SIZE & FIT</span>
        <p>{product&&product.product.shortsize}</p>
        {/* <p>Model Wears: XS</p> */}
        
        <span>Note:</span>{" "}
        <p>Actual product color may vary slightly from the image.</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span>SHIPPING</span>
        <p>
          upto 5 - 7 Working Days
          <br />
          upto 10 -15 Working Days
        </p>
        <p>
          We can ship to virtually any address in the world. Note that there are
          restrictions on some products, and some products cannot be shipped to
          international destinations.
        </p>
        <p>
          When you place an order, we will estimate shipping and delivery dates
          for you based on the availability of your items and the shipping
          options you choose. Depending on the shipping provider you choose,
          shipping date estimates may appear on the shipping quotes page.
        </p>
        <p>
          Please also note that the shipping rates for many items we sell are
          weight-based. The weight of any such item can be found on its detail
          page. To reflect the policies of the shipping companies we use, all
          weights will be rounded up to the next full pound.
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <span>RETURN POLICY</span>
        <p>
          You may return most new, unopened items within 30 days of delivery for
          a full amount credit voucher.
        </p>
        <p>
          You should expect to receive the voucher within ten days of returning
          your package, however, in many cases you will receive it more quickly.
          This time period includes the transit time for us to receive the
          return from shipper (7 business days) and the time it takes us to
          process your return for issuing voucher on your registered e-mail (3
          business days). Vouchers can be used on your future online shopping
          with us, and have a validity of 3 months from the date of issuance.
        </p>
        <p>
          If you need to return an item, simply contact our customer care
          department by emailing us at wecare@ruposh.pk or you can call us
          at +92 (320) 9455811. Provide the required information to our
          friendly representative and if all the conditions met, we will
          schedule pick-up from your doorstep.
        </p>
        <span>
          <p>*Fragrances and intimate apparel cannot be returned.</p>
        </span>
        <span>EXCHANGE POLICY</span>
        <p>
          We aim to facilitate all our clients if they wish to exchange their
          purchased articles, provided that the purchase was made in Pakistan,
          online or at any of our stores.
        </p>
        <p>
          Any article purchased can be exchanged within 30 days of purchase from
          store or receipt by courier.
        </p>
        <p>
          Articles are qualified for change if they are unused, all tags are
          intact, packing is in its original condition and original invoice is
          present. Articles purchased on a discount or on sale are not qualified
          for exchange.
        </p>
        <p>
          Refunds are not in cash - the client will be issued a coupon of same
          value valid for Online Store ONLY, which can be used immediately or in
          the future. Please study your coupon carefully for further details.
        </p>
        <p>Items of formal outfits and loose fabric cannot be exchanged.</p>
        <p>
          In case of home article return, it should be in Sapphire’s original
          home packing.
        </p>
        <p>
          These conditions apply to non-sale orders only. For sale orders,
          exchanges will only be provided for valid reasons and exchange time
          will also take longer than normal.
        </p>
        <p>
          For further assistance, you can contact our customer service
          department by emailing us at wecare@ruposh.pk or you can call
          us at +92 (320) 9455811. Provide all the required information to
          our friendly representative and if all the conditions of the exchange
          are met, we will schedule the pick-up from your doorstep.
        </p>
        <p>Fragrances, Cosmetics, intimate apparel cannot be exchanged.</p>
      </TabPanel>
    </Box>
  );
}
