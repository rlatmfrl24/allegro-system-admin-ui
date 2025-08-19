interface MenuItem {
  label: string;
  id: string;
  children?: MenuItem[];
}

const FakeMenuItems: MenuItem[] = [
  {
    label: "챗봇 응답 지식 관리",
    id: "knowledge",
    children: [
      {
        label: "지식 청크 관리",
        id: "knowledge-chunk",
      },
      {
        label: "Commercial",
        id: "commercial",
        children: [
          { label: "Basic Slot Allocation(BSA)", id: "bsa" },
          { label: "Vessel Space Control(VSC)", id: "vsc" },
          { label: "Freight Rate Contract(FRC)", id: "frc" },
          { label: "Agent Commission(ACM)", id: "acm" },
          { label: "Container Business Performance(CBP)", id: "cbp" },
        ],
      },
      {
        label: "Customer Service",
        id: "customer-service",
      },
      {
        label: "Logistics",
        id: "logistics",
      },
      {
        label: "Equipment",
        id: "equipment",
      },
      {
        label: "Vessel",
        id: "vessel",
      },
      {
        label: "Finance",
        id: "finance",
      },
      {
        label: "인텐트 관리",
        id: "intent-management",
      },
      {
        label: "API 관리",
        id: "api-management",
      },
    ],
  },
];

export { FakeMenuItems };
