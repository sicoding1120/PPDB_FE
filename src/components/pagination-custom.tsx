import React from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'
interface TemplatePaginationProps {
    handlerPrev: () => void;
    handlerNext: () => void,
    handlerLink: (i: number) => void,
    page: number,
    totalPages: number
}

const PaginationCustom = ({ handlerPrev, handlerNext, handlerLink, page, totalPages }: TemplatePaginationProps) => {
  return (
    <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
        href='#'
        onClick={handlerPrev}
      />
    </PaginationItem>

    {Array.from({ length: totalPages }, (_, i) => (
      <PaginationItem key={i}>
        <PaginationLink
          href='#'
          isActive={page === i + 1}
          onClick={()=> handlerLink(i)}
        >
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    ))}

    <PaginationItem>
      <PaginationNext
        href='#'
        onClick={handlerNext}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>

  )
}

export default PaginationCustom