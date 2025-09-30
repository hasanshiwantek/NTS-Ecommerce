"use client"

import { Button } from "@/components/ui/button"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getVisiblePages = () => {
    if (totalPages <= 7) return [...Array(totalPages).keys()].map((i) => i + 1)

    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages]
    if (currentPage >= totalPages - 3)
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ]
  }

  return (
    <div className="flex justify-center items-center space-x-1 mt-6">
      {/* Prev Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded px-3 text-sm"
      >
        Prev
      </Button>

      {/* Page Buttons */}
      {getVisiblePages().map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="px-2 text-sm text-gray-500 select-none"
          >
            ...
          </span>
        ) : (
          <Button
            key={i}
            size="sm"
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => onPageChange(Number(page))}
            className={`rounded px-3 text-sm ${
              currentPage === page
                ? "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]"
                : ""
            }`}
          >
            {page}
          </Button>
        )
      )}

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded px-3 text-sm"
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination


