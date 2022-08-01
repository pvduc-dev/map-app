import React, {useEffect, useState, ChangeEvent, FC} from 'react';
// @ts-ignore
import Search from "@/assets/icons/search.svg";
// @ts-ignore
import Location from "@/assets/icons/location.svg";
import Divider from "@/components/atoms/Divider";
import {ajax} from "rxjs/ajax";
import {distinctUntilChanged, filter, pluck, skip, Subject, switchMap, throttleTime} from "rxjs";

const getSuggestLocation = (val: string) => {
  return ajax(`https://rsapi.goong.io/Place/AutoComplete?api_key=y7ppbuJEqALDVJaIqWltfUODmc5xNgrvMFuhmB67&location=21.013715429594125,%20105.79829597455202&input=${val}`)
}

const text$ = new Subject<string>();

interface SearchBoxProps {
  moveToLocation: Function,
  isVisible: boolean,
}

const SearchBox: FC<SearchBoxProps> = ({moveToLocation, isVisible}) => {
  const [data, setData] = useState<any[]>([]);

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    text$.next(evt.target.value)
  }

  useEffect(() => {
    const subscription = text$.pipe(
      skip(1),
      filter(val => !!val),
      throttleTime(2000),
      distinctUntilChanged(),
      switchMap(value => getSuggestLocation(value)),
      pluck('response'),
      pluck('predictions')
    ).subscribe(
      next => {
        console.log(next)
        setData(next as any[])
      }
    )
    return () => {
      subscription.unsubscribe();
    }
  }, [])

  function handleItemClick(item: any) {
    moveToLocation(item)
  }

  return (
    <>
      {isVisible && (
        <div
          className="absolute w-[32rem] rounded-md h-[26.8rem] top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/2 z-50 bg-[#0F0D1E] py-4"
        >
          <div
            className="mb-3 relative"
          >
            <Search
              className="absolute fill-gray-400 top-1 left-5"
              width={16}
              height={16}
            />
            <input onChange={handleChange} className="text-sm outline-none bg-transparent text-gray-200 mx-12" placeholder="Tìm kiếm địa điểm..." type="text"/>
          </div>
          <Divider/>
          {data?.map((item) => (
            <div
              key={item?.description}
              onClick={() => handleItemClick(item)}
            >
              <div
                className="relative text-gray-400 p-4 text-sm"
              >
                <Location
                  className="absolute fill-gray-400 top-4 left-5"
                  width={16}
                  height={16}
                />
                <p className="ml-8">{item.description}</p>
              </div>
              <Divider/>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBox;
