'use client';

import { useState } from 'react';
import { snapdom } from '@zumer/snapdom';

interface ScreenshotButtonProps {
  targetSelector: string;
  defaultFileName: string;
}

function normalizeFileName(input: string) {
  const name = input.trim().replace(/\.png$/i, '');
  return name.replace(/[\\/:*?"<>|]/g, '-').replace(/\s+/g, '-');
}

export default function ScreenshotButton({
  targetSelector,
  defaultFileName,
}: ScreenshotButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleScreenshot = async () => {
    const input = window.prompt('请输入生成图片的名称', defaultFileName);
    if (input === null) return;

    const filename = normalizeFileName(input) || defaultFileName;
    const target = document.querySelector<HTMLElement>(targetSelector);

    if (!target) {
      window.alert('未找到需要截图的卡片内容，请刷新页面后重试。');
      return;
    }

    try {
      setIsGenerating(true);
      await snapdom.download(target, {
        filename,
        scale: Math.max(window.devicePixelRatio || 1, 2),
      });
    } catch (error) {
      console.error(error);
      window.alert('截图生成失败，请稍后重试。');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      type="button"
      className="screenshot-btn"
      onClick={handleScreenshot}
      disabled={isGenerating}
    >
      {isGenerating ? '生成中...' : '生成截图'}
    </button>
  );
}
