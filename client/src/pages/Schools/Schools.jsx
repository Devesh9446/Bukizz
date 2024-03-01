import { Button, Img, Text } from 'components';
import Model from 'components/Model/Model';
import Pagination from 'components/Pagination/Pagination';
import SearchBar from 'components/SearchBar/SearchBar';
import TableViewer from 'components/TableViewer/TableViewer';
import AddCategories from 'pages/Categories/AddCategories';
import React, { useEffect, useState } from 'react';
import { fetchApi } from 'utils/fetchApi';
import { Toast } from 'utils/swal';
import UpdateSchools from './UpdateSchools';

function Schools() {
    const [showAddSchoolsForm, setShowAddSchoolForm] = useState(false);
    const [schoolData, setSchoolData] = useState({});
    const [schoolsData, setSchoolsData] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPage] = useState(0);
    const handleSort = () => { }

    useEffect(() => {
        if (!showAddSchoolsForm) {
            getData();
        }
    }, [showAddSchoolsForm, limit, page]);

    const getData = async () => {

        try {
            const query = `page=${page}&limit=${limit}`;
            const resp = await fetchApi(`/v1/admin/school?${query}`);
            // console.log(resp);
            if (resp.success) {
                setSchoolsData(resp.data);
                setTotalPage(resp.totalPages);
                // Toast.fire({
                //     icon: "success",
                //     title: "Data fetched successfully",
                // });
                setLoading(false);
            }

        } catch (error) {
            console.log("error in fetching data", error);
            Toast.fire({
                icon: "error",
                title: "Error Fetcching data",
            });
        }
    }

    if (showAddSchoolsForm) {
        return <UpdateSchools data={schoolData} showModel={setShowAddSchoolForm} />
    }
    return (
        <div className="bg-gray-50_01 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto w-full">

            <div className="flex-1 sm:h-[1056px]  md:mt-0 mt-6 md:px-5 relative w-full">
                <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-start mx-auto top-[1%] w-full">
                    <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                        <Text
                            className="mb-[5px] mt-4 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                            size="txtGilroySemiBold28"
                        >
                            Schools
                        </Text>
                        <div className="    ">
                            <Button
                                className="cursor-pointer font-medium min-w-[161px] rounded-md text-base text-center"
                                color="blue_A700_01"
                                size="lg"
                                variant="fill"
                                onClick={() => { setShowAddSchoolForm(true) }}
                            >
                                Add Schools
                            </Button>
                        </div>


                    </div>
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[98%] md:w-full">
                        <SearchBar
                            setQuery={setQuery}
                            query={query}
                            placeholder="Type something to search"
                            handleSort={handleSort}
                        />
                        <TableViewer
                            heading={[
                                "Sr.No",
                                "Logo",
                                "Name",
                                "City",
                                "Email",
                                "Website",
                            ]}
                            loading={loading}
                        >
                            <Row
                                data={schoolsData}
                                setSingleSchool={setSchoolData}
                                setShowAddSchoolForm={setShowAddSchoolForm}
                                page={page}
                                limit={limit}
                            //   fetchData={fetchData}
                            />
                        </TableViewer>
                        <Pagination page={page} setPage={setPage} totalPage={totalPages} limit={limit} setLimit={setLimit} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schools;


const Row = ({ data = [], setSingleSchool = () => { }, setShowAddSchoolForm = () => { }, page = 1, limit = 1, }) => {
    console.log(page ,limit);
    const handleClick = (el) => {
        setSingleSchool(el);
        setShowAddSchoolForm(true);
    }
    return (
        <>
            {data.map((el, index) => (
                <tr key={el.schoolId} onClick={() => {
                    handleClick(el);
                }}>
                    <td>{(page - 1) * limit + index + 1}</td>
                    <td> <Img
                        className="h-[60px] md:h-auto object-cover rounded-[3px] w-[60px]"
                        src={el.logo || el.image}
                        alt={`${el.name}'s Logo`}
                    />
                    </td>
                    <td>{el.name}</td>
                    <td>{el.city}</td>
                    <td>{el.email}</td>
                    <td><a href={el.website} target='blank'>{el.website}</a></td>

                </tr>

            ))}
        </>
    );
};