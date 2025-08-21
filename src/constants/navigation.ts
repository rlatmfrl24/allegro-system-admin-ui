import type { NavigationItem } from "../types/navigation";

export const NAV_ITEMS: NavigationItem[] = [
  {
    label: "챗봇 응답 지식 관리",
    id: "knowledge",
    description:
      "Manages knowledge base and related data for chatbot responses to user questions",
    children: [
      {
        label: "지식 청크 관리",
        id: "knowledge-chunk",
        description:
          "Systematically manages knowledge units used in chatbot responses",
      },
      {
        label: "Commercial",
        id: "commercial",
        description:
          "Manages knowledge and information related to commercial operations",
        children: [
          {
            label: "Basic Slot Allocation(BSA)",
            id: "bsa",
            description:
              "Manages knowledge and rules related to basic slot allocation",
          },
          {
            label: "Vessel Space Control(VSC)",
            id: "vsc",
            description:
              "Manages knowledge related to vessel space control and management",
          },
          {
            label: "Freight Rate Contract(FRC)",
            id: "frc",
            description:
              "Manages freight rate contract information and knowledge",
          },
          {
            label: "Agent Commission(ACM)",
            id: "acm",
            description:
              "Manages knowledge related to agent commission and delegation",
          },
          {
            label: "Container Business Performance(CBP)",
            id: "cbp",
            description:
              "Manages container business performance analysis and knowledge",
          },
        ],
      },
      {
        label: "Customer Service",
        id: "customer-service",
        description: "Manages customer service related knowledge and FAQs",
      },
      {
        label: "Logistics",
        id: "logistics",
        description:
          "Manages logistics and transportation related knowledge and information",
      },
      {
        label: "Equipment",
        id: "equipment",
        description:
          "Manages equipment and facility related knowledge and manuals",
      },
      {
        label: "Vessel",
        id: "vessel",
        description:
          "Manages technical knowledge and operational information related to vessels",
      },
      {
        label: "Finance",
        id: "finance",
        description:
          "Manages financial and accounting related knowledge and policies",
      },
      {
        label: "인텐트 관리",
        id: "intent-management",
        description: "Manages intent data for understanding user intentions",
      },
      {
        label: "API 관리",
        id: "api-management",
        description:
          "Manages external API integration and data collection related knowledge",
      },
    ],
  },
  {
    label: "챗봇 설정",
    id: "chatbot-settings",
    description:
      "Configures and manages chatbot behavior patterns and response settings",
    children: [
      {
        label: "시나리오 관리",
        id: "scenario-management",
        description:
          "Manages scenarios that define conversation flows with the chatbot",
        children: [
          {
            label: "시나리오 목록",
            id: "scenario-list",
            description: "Views and manages all registered scenarios",
          },
          {
            label: "시나리오 생성",
            id: "scenario-create",
            description: "Creates new conversation scenarios",
          },
          {
            label: "시나리오 수정",
            id: "scenario-edit",
            description: "Modifies and updates existing scenarios",
          },
        ],
      },
      {
        label: "답변 템플릿 관리",
        id: "response-template-management",
        description: "Manages standard templates used in chatbot responses",
        children: [
          {
            label: "템플릿 목록",
            id: "template-list",
            description: "Views all registered response templates",
          },
          {
            label: "템플릿 생성",
            id: "template-create",
            description: "Creates new response templates",
          },
        ],
      },
      {
        label: "사용자 피드백",
        id: "user-feedback",
        description: "Collects and analyzes feedback from users",
        children: [
          {
            label: "피드백 목록",
            id: "feedback-list",
            description: "Views and manages user feedback list",
          },
          {
            label: "피드백 통계",
            id: "feedback-statistics",
            description: "Provides statistics by analyzing feedback data",
          },
        ],
      },
      {
        label: "통계 및 리포트",
        id: "statistics-report",
        description:
          "Analyzes chatbot usage status and performance to generate reports",
        children: [
          {
            label: "챗봇 사용 통계",
            id: "chatbot-usage-statistics",
            description: "Provides chatbot usage and performance statistics",
          },
          {
            label: "지식 활용 리포트",
            id: "knowledge-report",
            description:
              "Analyzes knowledge base utilization and effectiveness",
          },
        ],
      },
      {
        label: "시스템 로그",
        id: "system-log",
        description: "Views and manages operation logs of the chatbot system",
        children: [
          {
            label: "로그 조회",
            id: "log-view",
            description: "Views and analyzes system logs",
          },
          {
            label: "로그 다운로드",
            id: "log-download",
            description: "Downloads log data as files",
          },
        ],
      },
      {
        label: "권한 및 접근 제어",
        id: "permission-access-control",
        description: "Manages system access permissions and user roles",
        children: [
          {
            label: "사용자 관리",
            id: "user-management",
            description: "Manages system user accounts",
          },
          {
            label: "역할 관리",
            id: "role-management",
            description: "Sets user roles and permissions",
          },
          {
            label: "접근 이력",
            id: "access-history",
            description: "Tracks user access records",
          },
        ],
      },
    ],
  },
  {
    label: "환경설정",
    id: "settings",
    description: "Configures system basic settings and user environment",
    children: [
      {
        label: "일반 설정",
        id: "general-settings",
        description: "Manages basic system settings",
        children: [
          {
            label: "시스템 정보",
            id: "system-info",
            description: "Checks system version and basic information",
          },
          {
            label: "테마 설정",
            id: "theme-settings",
            description: "Sets user interface theme",
          },
          {
            label: "언어 설정",
            id: "language-settings",
            description: "Manages system language and localization settings",
          },
        ],
      },
      {
        label: "알림 설정",
        id: "notification-settings",
        description: "Configures system notification and alert methods",
        children: [
          {
            label: "이메일 알림",
            id: "email-notification",
            description: "Manages email notification settings",
          },
          {
            label: "푸시 알림",
            id: "push-notification",
            description: "Configures push notification settings",
          },
          {
            label: "알림 기록",
            id: "notification-history",
            description: "Checks history of sent notifications",
          },
        ],
      },
      {
        label: "보안 설정",
        id: "security-settings",
        description:
          "Manages account security and authentication related settings",
        children: [
          {
            label: "비밀번호 변경",
            id: "change-password",
            description: "Changes user password",
          },
          {
            label: "2단계 인증",
            id: "two-factor-auth",
            description: "Manages two-factor authentication settings",
          },
          {
            label: "접속 기록",
            id: "login-history",
            description: "Checks account login history",
          },
        ],
      },
      {
        label: "백업 및 복원",
        id: "backup-restore",
        description: "Manages backup and restoration of system data",
        children: [
          {
            label: "데이터 백업",
            id: "data-backup",
            description: "Backs up important data",
          },
          {
            label: "데이터 복원",
            id: "data-restore",
            description: "Restores backed up data",
          },
          {
            label: "백업 이력",
            id: "backup-history",
            description: "Checks backup job history",
          },
        ],
      },
    ],
  },
  {
    label: "고객 지원",
    id: "customer-support",
    description: "Manages customer inquiries and support services",
    children: [
      {
        label: "문의 관리",
        id: "inquiry-management",
        description: "Systematically manages customer inquiries",
        children: [
          {
            label: "문의 목록",
            id: "inquiry-list",
            description: "Views received customer inquiries",
          },
          {
            label: "문의 답변",
            id: "inquiry-response",
            description: "Writes responses to customer inquiries",
          },
        ],
      },
      {
        label: "FAQ 관리",
        id: "faq-management",
        description: "Manages frequently asked questions and answers",
        children: [
          {
            label: "FAQ 목록",
            id: "faq-list",
            description: "Views and manages registered FAQs",
          },
          {
            label: "FAQ 등록",
            id: "faq-create",
            description: "Registers new FAQs",
          },
        ],
      },
      {
        label: "공지사항",
        id: "notice",
        description: "Manages system announcements and update information",
        children: [
          {
            label: "공지사항 목록",
            id: "notice-list",
            description: "Views registered announcements",
          },
          {
            label: "공지사항 작성",
            id: "notice-create",
            description: "Writes new announcements",
          },
        ],
      },
    ],
  },
  {
    label: "시스템 관리",
    id: "system-management",
    description: "Manages overall system operation and monitoring",
    children: [
      {
        label: "서버 상태",
        id: "server-status",
        description: "Monitors server status and performance",
        children: [
          {
            label: "실시간 모니터링",
            id: "realtime-monitoring",
            description: "Monitors server status in real-time",
          },
          {
            label: "서버 로그",
            id: "server-log",
            description: "Checks server operation logs",
          },
        ],
      },
      {
        label: "라이선스 관리",
        id: "license-management",
        description: "Manages system license information and renewal",
        children: [
          {
            label: "라이선스 정보",
            id: "license-info",
            description: "Checks current license status",
          },
          {
            label: "라이선스 갱신",
            id: "license-renewal",
            description: "Proceeds with license renewal process",
          },
        ],
      },
      {
        label: "API 관리",
        id: "api-management",
        description: "Handles external API integration and key management",
        children: [
          {
            label: "API 키 목록",
            id: "api-key-list",
            description: "Manages list of issued API keys",
          },
          {
            label: "API 키 발급",
            id: "api-key-create",
            description: "Issues new API keys",
          },
          {
            label: "API 사용 이력",
            id: "api-usage-history",
            description: "Checks API usage status and history",
          },
        ],
      },
    ],
  },
];
