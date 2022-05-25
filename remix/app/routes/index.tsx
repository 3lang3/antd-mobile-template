import React from "react";
import { ConfigProvider, ErrorBlock, Button, Dialog } from "antd-mobile";
// Please use cjs path for all import 
import zhCN from "antd-mobile/cjs/locales/zh-CN";
import enUS from "antd-mobile/cjs/locales/en-US";

export default () => {
  return (
    <>
      <ConfigProvider locale={zhCN}>
        <ErrorBlock status="disconnected" />
      </ConfigProvider>

      <ConfigProvider locale={enUS}>
        <ErrorBlock status="disconnected" />
      </ConfigProvider>

      <Button
        style={{ marginTop: 20 }}
        block
        color="primary"
        size="large"
        onClick={() => {
          Dialog.alert({
            content: "人在天边月上明",
            onConfirm: () => {
              console.log("Confirmed");
            },
          });
        }}
      >
        Hello Remix!
      </Button>
    </>
  );
};
