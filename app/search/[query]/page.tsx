"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSupabase } from "../../../lib/supabase/hooks/useSupabase";
import SearchResult from "../../../components/SearchResult";

const SearchPage = () => {
  const { query } = useParams();
  const { filterData, getFilterdData } = useSupabase();

  useEffect(() => {
    if (query) {
      getFilterdData(query.toString());
    }
  }, [query, getFilterdData]); // Add query to the dependency array

  return (
    <div className="text-black">
      <SearchResult filterData={filterData} />
    </div>
  );
};

export default SearchPage;
