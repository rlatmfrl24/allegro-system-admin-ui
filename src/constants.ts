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
  {
    label: "챗봇 설정",
    id: "chatbot-settings",
    children: [
      {
        label: "시나리오 관리",
        id: "scenario-management",
        children: [
          { label: "시나리오 목록", id: "scenario-list" },
          { label: "시나리오 생성", id: "scenario-create" },
          { label: "시나리오 수정", id: "scenario-edit" },
        ],
      },
      {
        label: "답변 템플릿 관리",
        id: "response-template-management",
        children: [
          { label: "템플릿 목록", id: "template-list" },
          { label: "템플릿 생성", id: "template-create" },
        ],
      },
      {
        label: "사용자 피드백",
        id: "user-feedback",
        children: [
          { label: "피드백 목록", id: "feedback-list" },
          { label: "피드백 통계", id: "feedback-statistics" },
        ],
      },
      {
        label: "통계 및 리포트",
        id: "statistics-report",
        children: [
          { label: "챗봇 사용 통계", id: "chatbot-usage-statistics" },
          { label: "지식 활용 리포트", id: "knowledge-report" },
        ],
      },
      {
        label: "시스템 로그",
        id: "system-log",
        children: [
          { label: "로그 조회", id: "log-view" },
          { label: "로그 다운로드", id: "log-download" },
        ],
      },
      {
        label: "권한 및 접근 제어",
        id: "permission-access-control",
        children: [
          { label: "사용자 관리", id: "user-management" },
          { label: "역할 관리", id: "role-management" },
          { label: "접근 이력", id: "access-history" },
        ],
      },
    ],
  },
  {
    label: "환경설정",
    id: "settings",
    children: [
      {
        label: "일반 설정",
        id: "general-settings",
        children: [
          { label: "시스템 정보", id: "system-info" },
          { label: "테마 설정", id: "theme-settings" },
          { label: "언어 설정", id: "language-settings" },
        ],
      },
      {
        label: "알림 설정",
        id: "notification-settings",
        children: [
          { label: "이메일 알림", id: "email-notification" },
          { label: "푸시 알림", id: "push-notification" },
          { label: "알림 기록", id: "notification-history" },
        ],
      },
      {
        label: "보안 설정",
        id: "security-settings",
        children: [
          { label: "비밀번호 변경", id: "change-password" },
          { label: "2단계 인증", id: "two-factor-auth" },
          { label: "접속 기록", id: "login-history" },
        ],
      },
      {
        label: "백업 및 복원",
        id: "backup-restore",
        children: [
          { label: "데이터 백업", id: "data-backup" },
          { label: "데이터 복원", id: "data-restore" },
          { label: "백업 이력", id: "backup-history" },
        ],
      },
    ],
  },
  {
    label: "고객 지원",
    id: "customer-support",
    children: [
      {
        label: "문의 관리",
        id: "inquiry-management",
        children: [
          { label: "문의 목록", id: "inquiry-list" },
          { label: "문의 답변", id: "inquiry-response" },
        ],
      },
      {
        label: "FAQ 관리",
        id: "faq-management",
        children: [
          { label: "FAQ 목록", id: "faq-list" },
          { label: "FAQ 등록", id: "faq-create" },
        ],
      },
      {
        label: "공지사항",
        id: "notice",
        children: [
          { label: "공지사항 목록", id: "notice-list" },
          { label: "공지사항 작성", id: "notice-create" },
        ],
      },
    ],
  },
  {
    label: "시스템 관리",
    id: "system-management",
    children: [
      {
        label: "서버 상태",
        id: "server-status",
        children: [
          { label: "실시간 모니터링", id: "realtime-monitoring" },
          { label: "서버 로그", id: "server-log" },
        ],
      },
      {
        label: "라이선스 관리",
        id: "license-management",
        children: [
          { label: "라이선스 정보", id: "license-info" },
          { label: "라이선스 갱신", id: "license-renewal" },
        ],
      },
      {
        label: "API 관리",
        id: "api-management",
        children: [
          { label: "API 키 목록", id: "api-key-list" },
          { label: "API 키 발급", id: "api-key-create" },
          { label: "API 사용 이력", id: "api-usage-history" },
        ],
      },
    ],
  },
];

export { FakeMenuItems };
