import { Escape, View } from "@fluent-blocks/react";

export default function BlockDashboard() {
  return (
    <View
      accentScheme="teams"
      themeName="light"
      main={{
        title: "",
        blocks: [
          {
            dashboard: {
              items: [
                {
                  item: {
                    widget: {
                      title: "Line Area",
                      label: "sss",
                      tabs: [
                        {
                          tab: { label: "tab1" },
                          panel: [
                            {
                              media: {
                                label: "media1",
                                chart: {
                                  type: "line-area",
                                  data: {
                                    labels: [
                                      "Jan",
                                      "Feb",
                                      "March",
                                      "April",
                                      "May",
                                    ],
                                    datasets: [
                                      {
                                        label: "Laptops",
                                        data: [1860, 7700, 4100, 3012, 2930],
                                      },
                                      {
                                        label: "Watches",
                                        data: [1200, 3600, 2480, 5049, 4596],
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          ],
                        },
                      ],
                      footerAction: {
                        actionId: "chart-action",
                        label: "View more",
                        icon: "arrow_right",
                        iconPosition: "after",
                      },
                    },
                  },
                  inlineSizeFactor: 2,
                  blockSizeFactor: 2,
                },
                {
                  item: {
                    widget: {
                      title: "Doughnut",
                      label: "sss",
                      tabs: [
                        {
                          tab: { label: "tab1" },
                          panel: [
                            {
                              media: {
                                label: "media1",
                                chart: {
                                  type: "doughnut",
                                  data: {
                                    labels: [
                                      "Jan",
                                      "Feb",
                                      "March",
                                      "April",
                                      "May",
                                    ],
                                    datasets: [
                                      {
                                        label: "Laptops",
                                        data: [1860, 7700, 4100, 3012, 2930],
                                      },
                                      {
                                        label: "Watches",
                                        data: [1200, 3600, 2480, 5049, 4596],
                                      },
                                    ],
                                  },
                                },
                              },
                              variant: "textWidth",
                            },
                          ],
                        },
                      ],
                      footerAction: {
                        actionId: "doughnut-action",
                        label: "View more",
                        icon: "arrow_right",
                        iconPosition: "after",
                      },
                    },
                  },
                },
                {
                  item: {
                    widget: {
                      title: "Description List",
                      label: "sss",
                      tabs: [
                        {
                          tab: { label: "tt" },
                          panel: [
                            {
                              descriptionList: [
                                {
                                  title: "title 1",
                                  description: "description 1",
                                },
                                {
                                  title: "title 2",
                                  description: "description 2",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      footerAction: {
                        actionId: "description-action",
                        label: "View more",
                        icon: "arrow_right",
                        iconPosition: "after",
                      },
                    },
                  },
                },
                {
                  item: {
                    widget: {
                      title: "Task",
                      label: "sss",
                      tabs: [
                        {
                          tab: { label: "tt" },
                          panel: [
                            {
                              descriptionList: [
                                {
                                  title: "title 1",
                                  description: "description 1",
                                },
                                {
                                  title: "title 2",
                                  description: "description 2",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      footerAction: {
                        actionId: "description-action",
                        label: "View more",
                        icon: "arrow_right",
                        iconPosition: "after",
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      }}
    />
  );
}
