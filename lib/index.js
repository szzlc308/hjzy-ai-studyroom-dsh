/**
 * 慧教智研 · AI 自习室 / 互动课堂 / 互动白板 制作 —— DSH 技能提供者
 *
 * 把"做一节会讲课的自习课"的方法随包分发：正文在 assets/skill.md，
 * 模板与参考在 assets/templates、assets/references，resourceBase 指向 assets 目录，
 * 模型按需读取，不需要另装文件。
 *
 * 依赖：@deepseek-ai/dsh-skill（注册表与 rank 常量）、@deepseek-ai/cordis（宿主）
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { BUNDLED_SKILL_RANK } from '@deepseek-ai/dsh-skill';

const PROVIDER_NAME = 'hjzy-ai-studyroom';
const SKILL_BODY_URL = new URL('../assets/skill.md', import.meta.url);
const RESOURCE_BASE = { kind: 'directory', path: fileURLToPath(new URL('../assets/', import.meta.url)) };

const CANDIDATE = {
  name: 'hjzy-ai-studyroom',
  description:
    '做一节"会讲课、能追问、可回看"的 AI 自习室/互动课堂课时：AI 老师边画边讲（书写与讲解逐句同步）、AI 同学随时讨论、学生边学边做，配复习、笔记、讨论、书架；产出单文件离线 HTML + 课时 JSON + 验收清单。用户提到 AI 自习室、互动课堂、互动白板、白板讲解、边画边讲、课时脚本、可打断课堂、检查点、学习笔记复习时加载。',
  invocation: { modelInvocable: true, userInvocable: true },
  provider: PROVIDER_NAME,
  source: 'bundled',
  resourceBase: RESOURCE_BASE,
  rank: BUNDLED_SKILL_RANK,
  locator: SKILL_BODY_URL,
};

const provider = {
  name: PROVIDER_NAME,
  list: () => Promise.resolve([CANDIDATE]),
  async get() {
    return {
      name: CANDIDATE.name,
      description: CANDIDATE.description,
      invocation: CANDIDATE.invocation,
      provider: CANDIDATE.provider,
      source: CANDIDATE.source,
      resourceBase: RESOURCE_BASE,
      content: await readFile(SKILL_BODY_URL, 'utf8'),
    };
  },
};

export const name = 'hjzy-ai-studyroom';
export const inject = ['skills'];
export function apply(ctx) {
  ctx.skills.registerProvider(() => provider);
}
