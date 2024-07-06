import React, { useState } from "react";
import FormStepper from "../../components/stepper/FormStepper";
import { GoChevronLeft } from "react-icons/go";
import { ColorPicker, Input, Select } from "antd";
import { AiOutlineFontSize } from "react-icons/ai";
import { RxFontItalic } from "react-icons/rx";
import { RxFontBold } from "react-icons/rx";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { PiPencilSimpleLine } from "react-icons/pi";
import { Box, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import TvIcon from "@mui/icons-material/Tv";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Content = () => {
  const [selectedDevice, setSelectedDevice] = useState("laptop");

  const handleDeviceChange = (event, newDevice) => {
    if (newDevice !== null) {
      setSelectedDevice(newDevice);
    }
  };

  const getPaperStyle = () => {
    switch (selectedDevice) {
      case "laptop":
        return { width: "100%", height: "80%" };
      case "tv":
        return { width: "100%", height: "90%" };
      case "phone":
        return { width: "50%", height: "70%" };
      default:
        return { width: "100%", height: "80%" };
    }
  };

  return (
    <div className="flex flex-col bg-white h-screen">
      <div className="flex flex-row items-center justify-between p-4 border-b border-neutral-900">
        <div className="flex flex-row items-center gap-1">
          <GoChevronLeft size={38} />
          <p className="text-3xl">Create</p>
        </div>

        <div>
          <FormStepper />
        </div>

        <div className="flex items-center bg-neutral-400 px-10 py-2 rounded-full">
          <p className="">Next</p>
        </div>
      </div>

      <div className="flex flex-row flex-grow">
        {/* Left Panel */}
        <div className="w-1/5 border-r border-neutral-900 h-full"></div>

        {/* Center Panel */}
        <div className="w-3/5 h-full" style={{ padding: "10px" }}>
          <ToggleButtonGroup
            value={selectedDevice}
            exclusive
            onChange={handleDeviceChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <ToggleButton value="laptop">
              <LaptopIcon />
            </ToggleButton>
            <ToggleButton value="tv">
              <TvIcon />
            </ToggleButton>
            <ToggleButton value="phone">
              <PhoneAndroidIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <Paper
            elevation={6}
            sx={{
              ...getPaperStyle(),
              borderRadius: "20px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>

        {/* Right Panel */}
        <div className="w-1/5 border-l border-neutral-900 h-full">
          <div className="flex flex-row ">
            <div className="flex items-center justify-center grow p-3 bg-neutral-200 hover:bg-neutral-100">
              General
            </div>
            <div className="flex items-center justify-center grow p-3 bg-white hover:bg-neutral-100">
              Selection
            </div>
          </div>

          {/* general tab */}
          <div className="flex flex-col gap-8 mt-10 px-6">
            {/* Essentials */}
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Essentials</p>
              </div>

              <div className="space-y-2">
                <div className="space-y-1 border-b border-neutral-200 py-2">
                  <p className="text-xs text-neutral-500">Label Color</p>
                  <ColorPicker defaultValue="#000000" size="small" showText />
                </div>

                <div className="space-y-1 border-b border-neutral-200 py-2">
                  <p className="text-xs text-neutral-500">Border Color</p>
                  <ColorPicker defaultValue="#000000" size="small" showText />
                </div>

                <div className="space-y-1 border-b border-neutral-200 py-2">
                  <p className="text-xs text-neutral-500">Placeholder Color</p>
                  <ColorPicker defaultValue="#000000" size="small" showText />
                </div>
              </div>
            </div>

            {/* Appearance */}
            <div className="space-y-3 mb-4">
              <div>
                <p className="font-semibold">Appearance</p>
              </div>

              <div className="space-y-2">
                <div className="border-b border-neutral-200 py-2">
                  <p className="text-xs text-neutral-500">Font Style</p>

                  <div className="flex flex-row items-center">
                    <AiOutlineFontSize size={18} />
                    <Select
                      placeholder="Helvetica Neue"
                      style={{
                        width: "100%",
                      }}
                      variant="borderless"
                      size="large"
                      options={[
                        {
                          value: "Helvetica Neue",
                          label: "Helvetica Neue",
                        },
                        {
                          value: "test",
                          label: "test",
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <div className="flex-1 border-b border-neutral-200 py-2">
                    <p className="text-xs text-neutral-500">Font Weight</p>

                    <div className="flex flex-row items-center">
                      <RxFontBold size={18} />
                      <Select
                        placeholder="Select Weight"
                        variant="borderless"
                        size="large"
                        style={{
                          width: "100%",
                        }}
                        options={[
                          {
                            value: "Bold",
                            label: "Bold",
                          },
                          {
                            value: "Semibold",
                            label: "Semibold",
                          },
                          {
                            value: "Normal",
                            label: "Normal",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="flex-1 border-b border-neutral-200 py-2">
                    <p className="text-xs text-neutral-500">Styling</p>

                    <div className="flex flex-row items-center">
                      <RxFontItalic size={18} />
                      <Select
                        placeholder="Select Styling"
                        variant="borderless"
                        size="large"
                        style={{
                          width: "100%",
                        }}
                        options={[
                          {
                            value: "Italics",
                            label: "Italics",
                          },
                          {
                            value: "Normal",
                            label: "Normal",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 border-b border-neutral-200 py-2">
                  <p className="text-xs text-neutral-500">Text Alignment</p>

                  <div className="flex flex-row gap-4 py-1">
                    <FaAlignLeft size={18} />
                    <FaAlignJustify size={18} />
                    <FaAlignRight size={18} />
                  </div>
                </div>

                <div className="space-y-2 border-b border-neutral-200 py-2">
                  <p className="text-xs text-neutral-500">Font Color</p>
                  <ColorPicker defaultValue="#000000" size="small" showText />
                </div>

                <div className="space-y-2 border-b border-neutral-200 py-2">
                  <p className="text-xs text-neutral-500">
                    Required Field Text
                  </p>
                  <ColorPicker defaultValue="#000000" size="small" showText />
                </div>

                <div className="space-y-1 border-b border-neutral-200 py-2">
                  <p className="text-xs text-neutral-500">
                    Required Field Text <span className="text-red-500">*</span>
                  </p>

                  <div className="flex flex-row items-center">
                    <Input
                      variant="borderless"
                      placeholder="Your name is required"
                    />

                    <PiPencilSimpleLine size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
