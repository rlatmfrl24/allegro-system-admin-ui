import { type DataProvider } from "react-admin";
import localStorageDataProvider from "ra-data-local-storage";

const initialData = {
  chunks: [
    {
      id: 1,
      name: "Chunk 1",
    },
  ],
  navMenu: [
    {
      label: "챗봇 응답 지식 관리",
      id: "knowledge",
      index: 0,
      children: [
        {
          label: "지식 청크 관리",
          id: "knowledge-chunk",
          index: 0,
        },
        {
          label: "Commercial",
          id: "commercial",
          index: 1,
          children: [
            { label: "Basic Slot Allocation(BSA)", id: "bsa", index: 0 },
            { label: "Vessel Space Control(VSC)", id: "vsc", index: 1 },
            { label: "Freight Rate Contract(FRC)", id: "frc", index: 2 },
            { label: "Agent Commission(ACM)", id: "acm", index: 3 },
            {
              label: "Container Business Performance(CBP)",
              id: "cbp",
              index: 4,
            },
          ],
        },
        { label: "Customer Service", id: "customer-service", index: 2 },
        { label: "Logistics", id: "logistics", index: 3 },
        { label: "Equipment", id: "equipment", index: 4 },
        { label: "Vessel", id: "vessel", index: 5 },
        { label: "Finance", id: "finance", index: 6 },
        { label: "인텐트 관리", id: "intent-management", index: 7 },
        { label: "API 관리", id: "api-management", index: 8 },
      ],
    },
    {
      label: "챗봇 설정",
      id: "chatbot-settings",
      index: 1,
      children: [
        {
          label: "시나리오 관리",
          id: "scenario-management",
          index: 0,
          children: [
            { label: "시나리오 목록", id: "scenario-list", index: 0 },
            { label: "시나리오 생성", id: "scenario-create", index: 1 },
            { label: "시나리오 수정", id: "scenario-edit", index: 2 },
          ],
        },
        {
          label: "답변 템플릿 관리",
          id: "response-template-management",
          index: 1,
          children: [
            { label: "템플릿 목록", id: "template-list", index: 0 },
            { label: "템플릿 생성", id: "template-create", index: 1 },
          ],
        },
        {
          label: "사용자 피드백",
          id: "user-feedback",
          index: 2,
          children: [
            { label: "피드백 목록", id: "feedback-list", index: 0 },
            { label: "피드백 통계", id: "feedback-statistics", index: 1 },
          ],
        },
        {
          label: "통계 및 리포트",
          id: "statistics-report",
          index: 3,
          children: [
            {
              label: "챗봇 사용 통계",
              id: "chatbot-usage-statistics",
              index: 0,
            },
            { label: "지식 활용 리포트", id: "knowledge-report", index: 1 },
          ],
        },
        {
          label: "시스템 로그",
          id: "system-log",
          index: 4,
          children: [
            { label: "로그 조회", id: "log-view", index: 0 },
            { label: "로그 다운로드", id: "log-download", index: 1 },
          ],
        },
        {
          label: "권한 및 접근 제어",
          id: "permission-access-control",
          index: 5,
          children: [
            { label: "사용자 관리", id: "user-management", index: 0 },
            { label: "역할 관리", id: "role-management", index: 1 },
            { label: "접근 이력", id: "access-history", index: 2 },
          ],
        },
      ],
    },
    {
      label: "환경설정",
      id: "settings",
      index: 2,
      children: [
        {
          label: "일반 설정",
          id: "general-settings",
          index: 0,
          children: [
            { label: "시스템 정보", id: "system-info", index: 0 },
            { label: "테마 설정", id: "theme-settings", index: 1 },
            { label: "언어 설정", id: "language-settings", index: 2 },
          ],
        },
        {
          label: "알림 설정",
          id: "notification-settings",
          index: 1,
          children: [
            { label: "이메일 알림", id: "email-notification", index: 0 },
            { label: "푸시 알림", id: "push-notification", index: 1 },
            { label: "알림 기록", id: "notification-history", index: 2 },
          ],
        },
        {
          label: "보안 설정",
          id: "security-settings",
          index: 2,
          children: [
            { label: "비밀번호 변경", id: "change-password", index: 0 },
            { label: "2단계 인증", id: "two-factor-auth", index: 1 },
            { label: "접속 기록", id: "login-history", index: 2 },
          ],
        },
        {
          label: "백업 및 복원",
          id: "backup-restore",
          index: 3,
          children: [
            { label: "데이터 백업", id: "data-backup", index: 0 },
            { label: "데이터 복원", id: "data-restore", index: 1 },
            { label: "백업 이력", id: "backup-history", index: 2 },
          ],
        },
      ],
    },
    {
      label: "고객 지원",
      id: "customer-support",
      index: 3,
      children: [
        {
          label: "문의 관리",
          id: "inquiry-management",
          index: 0,
          children: [
            { label: "문의 목록", id: "inquiry-list", index: 0 },
            { label: "문의 답변", id: "inquiry-response", index: 1 },
          ],
        },
        {
          label: "FAQ 관리",
          id: "faq-management",
          index: 1,
          children: [
            { label: "FAQ 목록", id: "faq-list", index: 0 },
            { label: "FAQ 등록", id: "faq-create", index: 1 },
          ],
        },
        {
          label: "공지사항",
          id: "notice",
          index: 2,
          children: [
            { label: "공지사항 목록", id: "notice-list", index: 0 },
            { label: "공지사항 작성", id: "notice-create", index: 1 },
          ],
        },
      ],
    },
    {
      label: "시스템 관리",
      id: "system-management",
      index: 4,
      children: [
        {
          label: "서버 상태",
          id: "server-status",
          index: 0,
          children: [
            { label: "실시간 모니터링", id: "realtime-monitoring", index: 0 },
            { label: "서버 로그", id: "server-log", index: 1 },
          ],
        },
        {
          label: "라이선스 관리",
          id: "license-management",
          index: 1,
          children: [
            { label: "라이선스 정보", id: "license-info", index: 0 },
            { label: "라이선스 갱신", id: "license-renewal", index: 1 },
          ],
        },
        {
          label: "API 관리",
          id: "api-management",
          index: 2,
          children: [
            { label: "API 키 목록", id: "api-key-list", index: 0 },
            { label: "API 키 발급", id: "api-key-create", index: 1 },
            { label: "API 사용 이력", id: "api-usage-history", index: 2 },
          ],
        },
      ],
    },
  ],
};

export const dataProvider: DataProvider = localStorageDataProvider({
  defaultData: initialData,
});
