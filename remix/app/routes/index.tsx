import React from "react";
import { ConfigProvider, ErrorBlock, Button, Dialog, Image } from "antd-mobile";
// Please use cjs path for all import 
import zhCN from "antd-mobile/cjs/locales/zh-CN";
import enUS from "antd-mobile/cjs/locales/en-US";

const demoSrc =
  "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60";

export default () => {
  return (
    <>
      <Image src={demoSrc} />
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
