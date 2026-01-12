// src/pages/Projects.tsx  (only the changed parts)
<div className="relative z-10 flex items-center h-full">
  {/* LEFT - icon (only if emoji fallback) */}
  {!isImageUrl && (
    <div className="shrink-0 flex items-center justify-center w-32 h-32 mr-6 bg-white/10 backdrop-blur rounded-2xl text-6xl">
      {currentProject.image}
    </div>
  )}

  {/* RIGHT - text block (now full-width when no image) */}
  <div className="flex-1 space-y-4 text-white">
    <h2 className="text-3xl font-bold">{currentProject.title}</h2>
    <p className="text-sm leading-relaxed opacity-90">
      {currentProject.description}
    </p>

    <div className="flex flex-wrap gap-2 pt-2">
      {currentProject.techStack.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    {currentProject.live !== "#" && (
      <div className="pt-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          asChild
        >
          <a href={currentProject.live} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    )}
  </div>
</div>
