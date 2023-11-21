import { Button } from "@/components/ui/button";

type Props = {
  paginate: Paginate;
  handlePage: (page: number) => void;
};

const PaginationCOntainer = ({ paginate, handlePage }: Props) => {
  const { pageCount, pageSize, page } = paginate ?? "";

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  return (
    <div className="mt-9 flex items-center justify-center gap-x-2">
      {pages.map((pageNumber) => {
        return (
          <Button
            key={pageNumber}
            onClick={() => handlePage(pageNumber)}
            className={`${
              pageNumber === page
                ? "bg-primary"
                : "bg-transparent text-primary hover:text-primary-foreground  ring-primary ring-1"
            }`}
          >
            {pageNumber}
          </Button>
        );
      })}
    </div>
  );
};
export default PaginationCOntainer;
