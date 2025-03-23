import Image from "next/image";
import { user } from "./interface/userTypes";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/users", { cache: "no-store" });
  const data = await res.json();
  return (
    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Image
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Name
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Email
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Gender
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Phone
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            SSN
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            DOB
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Address
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Account Number
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            weight
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Role
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.users.map((userInfo: user) => {
          return (
            <tr
              className="hover:bg-gray-50 focus-within:bg-gray-100"
              key={userInfo.id}
            >
              <td className="px-4 py-2 text-sm text-gray-900">
                <Image
                  src={userInfo?.image}
                  alt={`Profile picture of ${userInfo?.firstName} ${userInfo?.lastName}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </td>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-semibold text-gray-900"
              >
                {`${userInfo?.lastName}, ${userInfo?.firstName} ${userInfo?.midenName}`}
              </th>
              <td className="px-4 py-2 text-sm text-gray-900">
                <a
                  href={`mailto:${userInfo?.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {userInfo?.email}
                </a>
              </td>
              <td
                className="px-4 py-2 text-sm text-gray-900"
                aria-label="Gender"
              >
                {userInfo?.gender}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                <a
                  href={`tel:${userInfo?.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {userInfo?.phone}
                </a>
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                <span aria-hidden="true">{userInfo?.ssn}</span>
              </td>
              <td
                className="px-4 py-2 text-sm text-gray-900"
                aria-label="Birth Date"
              >
                {userInfo?.birthDate}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                <address className="not-italic">
                  {userInfo?.address.address}, {userInfo?.address.city},{" "}
                  {userInfo?.address.state}
                </address>
                <div aria-label="Postal Code">{`Postal Code: ${userInfo?.address.postalCode}`}</div>
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                <span aria-hidden="true">{userInfo?.bank?.iban}</span>
              </td>
              <td
                className="px-4 py-2 text-sm text-gray-900"
                aria-label="Weight"
              >
                {userInfo?.weight} kg
              </td>
              <td className="px-4 py-2 text-sm text-gray-900" aria-label="Role">
                {userInfo?.role}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
