# Next.js版 立地開発プランナーサイト - 実装計画

## ファイル構成

```
land-planner-nextjs/          # 新規 Next.js プロジェクト
├── app/
│   ├── layout.tsx             # ルートレイアウト（ヘッダー、フッター共通）
│   ├── page.tsx               # トップページ（Hero + 4 Sections）
│   ├── globals.css            # グローバルTailwind設定
│   └── components/
│       ├── HeroSection.tsx     # ヒーロー画像＋テキスト＋CTA
│       ├── ProfileSection.tsx  # プロフィール・実績
│       ├── SolutionSection.tsx # ソリューション（3カード）
│       ├── WorkflowSection.tsx # 仕事の流れ（4ステップ）
│       ├── ContactSection.tsx  # お問い合わせ
│       ├── FloatingButton.tsx  # フローティング LINE ボタン
│       └── Navigation.tsx      # ホップナビゲーション
├── tailwind.config.ts         # Tailwind + カラーカスタム
├── tsconfig.json
├── next.config.js
└── package.json
```

## 元の HTML 構造との対応

| HTML ファイル | Next.js コンポーネント | 説明 |
|---|---|---|
| src/index.html | app/page.tsx | トップページ（複数セクション統合） |
| src/profile.html | app/profile/page.tsx | プロフィール専用ページ（後続） |
| src/solution.html | app/solution/page.tsx | ソリューション専用ページ（後続） |
| src/workflow.html | app/workflow/page.tsx | 仕事の流れページ（後続） |
| src/contact.html | app/contact/page.tsx | お問い合わせページ（後続） |
| src/components/header.html | components/Navigation.tsx | ナビゲーション |
| src/components/footer.html | layout.tsx 内 Footer | フッター |

## デザイン・トークン

**Tailwind Config** で拡張：
```typescript
colors: {
  'acre-blue': '#1A2E35',    // メイン色（ヘッダー、見出し）
  'acre-gold': '#B59A6D',    // アクセント色（ボタン、強調）
  'acre-beige': '#F9F7F2',   // 背景色
}
fontFamily: {
  serif: ['Noto Serif JP', 'serif'],     // 見出し用
  sans: ['Noto Sans JP', 'sans-serif'],  // 本文用
}
```

## 実装フェーズ

### Phase 1: 基本構造（今回）
- `app/layout.tsx` - ルートレイアウト設定
- `app/page.tsx` - トップページ
- `app/components/HeroSection.tsx` - ヒーローセクション
- `tailwind.config.ts` - カラー・フォント設定
- `next.config.js` - Image 最適化設定

### Phase 2: 追加セクション（次次回以降）
- ProfileSection, SolutionSection, WorkflowSection, ContactSection
- 各ページ（profile/page.tsx など）

### Phase 3: アニメーション・インタラクション（その後）
- Framer Motion 統合
- スクロールトリガー（IntersectionObserver）
- ホバーエフェクト（Tailwind + shadcn/ui）

## 重要な設計決定

1. **HTML 資産の保持**
   - 既存の `src/` HTML ファイルはそのまま残す
   - `land-planner-nextjs/` として新規ディレクトリで Next.js プロジェクト構築
   - 将来的に移行時の参照資料として活用

2. **Image 最適化**
   - `next/image` で野鳥写真を自動最適化
   - WebP 変換、遅延読み込み対応

3. **TypeScript 型安全性**
   - 全コンポーネント「React.FC<Props>」で型付け
   - Props インターフェース定義

4. **Tailwind + shadcn/ui**
   - Button は shadcn/ui を使用
   - Card, Input, Select なども shadcn/ui
   - カスタムスタイルは Tailwind ユーティリティで追加

5. **SEO 対応**
   - App Router の Metadata API を活用
   - 構造化データ（Schema.org）は後続

---

次回実装時に、以下のファイル群を作成予定：
1. ✅ tailwind.config.ts
2. ✅ app/layout.tsx
3. ✅ app/page.tsx
4. ✅ app/components/HeroSection.tsx
5. ✅ app/globals.css
